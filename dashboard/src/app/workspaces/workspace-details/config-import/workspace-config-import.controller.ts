/*
 * Copyright (c) 2015-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';
import {CheErrorMessagesService} from '../../../../components/error-messages/che-error-messages.service';

/**
 * @ngdoc controller
 * @name workspaces.config-import.controller:WorkspaceConfigImportController
 * @description This class is handling the controller for the workspace config import widget
 * @author Oleksii Kurinnyi
 */
export class WorkspaceConfigImportController {

  static $inject = ['$log', '$scope', '$timeout', 'cheErrorMessagesService'];

  $log: ng.ILogService;
  $scope: ng.IScope;
  $timeout: ng.ITimeoutService;
  errorMessagesService: CheErrorMessagesService;

  editorOptions: {
    lineWrapping: boolean,
    lineNumbers: boolean,
    matchBrackets: boolean,
    mode: string,
    onLoad: Function
  };

  configValidationMessages: string[] = [];
  configErrorsNumber: number = 0;
  otherValidationMessages: {
    [errorsScope: string]: string[]
  } = {};
  errorsScopeSettings: string = 'workspace-details-settings';
  errorsScopeEnvironment: string = 'workspace-details-environment';
  importWorkspaceJson: string;
  isActive: boolean;
  workspaceConfig: any;
  newWorkspaceConfig: any;
  workspaceConfigOnChange: Function;
  private saveTimeoutPromise: ng.IPromise<any>;
  private isSaving: boolean;


  /**
   * Default constructor that is using resource
   */
  constructor($log: ng.ILogService, $scope: ng.IScope, $timeout: ng.ITimeoutService, cheErrorMessagesService: CheErrorMessagesService) {
    this.$log = $log;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.errorMessagesService = cheErrorMessagesService;

    this.isSaving = false;

    this.importWorkspaceJson = angular.toJson(this.workspaceConfig, true);

    $scope.$watch(() => {
      return this.workspaceConfig;
    }, () => {
      let editedWorkspaceConfig;
      try {
        editedWorkspaceConfig = angular.fromJson(this.importWorkspaceJson) || {};
        angular.extend(editedWorkspaceConfig, this.workspaceConfig);
      } catch (e) {
        editedWorkspaceConfig = this.workspaceConfig;
      }
      this.importWorkspaceJson = angular.toJson(editedWorkspaceConfig, true);
      const validateOnly = true;
      this.onChange(validateOnly);
    }, true);

    this.errorMessagesService.registerCallback(this.errorsScopeSettings, this.updateErrorsList.bind(this, this.errorsScopeSettings));
    this.errorMessagesService.registerCallback(this.errorsScopeEnvironment, this.updateErrorsList.bind(this, this.errorsScopeEnvironment));
  }

  updateErrorsList(errorsScope: string, otherErrors: string[]) {
    this.otherValidationMessages[errorsScope] = angular.copy(otherErrors);
  }

  /**
   * Returns status of the workspace config validation.
   * @returns {che.IValidation}
   */
  workspaceConfigValidation(): che.IValidation {
    let validation: che.IValidation;
    try {
      angular.fromJson(this.importWorkspaceJson);
      validation = {'isValid': true, 'errors': []};
    } catch (error) {
      validation = {'isValid': false, 'errors': [error.toString()]};
    }

    return validation;
  }

  /**
   * Callback when editor content is changed.
   */
  onChange(validateOnly?: boolean): void {
    if (!this.importWorkspaceJson) {
      this.configValidationMessages = ['The config is required.'];
      return;
    }

    try {
      let config = angular.fromJson(this.importWorkspaceJson);
      this.isSaving = (this.configValidationMessages.length === 0) && !angular.equals(config, this.workspaceConfig);

      if (this.saveTimeoutPromise) {
        this.$timeout.cancel(this.saveTimeoutPromise);
      }

      this.saveTimeoutPromise = this.$timeout(() => {
        // immediately apply config on IU
        this.newWorkspaceConfig = angular.copy(config);
        this.isSaving = false;
        this.applyChanges();
      }, 2000);


    } catch (e) {
      if (this.configValidationMessages.length === 0) {
        this.configValidationMessages = ['JSON is invalid.'];
      }
      this.$log.error(e);
    }

    this.configErrorsNumber = this.configValidationMessages.length;
  }

  /**
   * Callback when user applies new config.
   */
  applyChanges(): void {
    this.workspaceConfigOnChange({config: this.newWorkspaceConfig});
  }
}
