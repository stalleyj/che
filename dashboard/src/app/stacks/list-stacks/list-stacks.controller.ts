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
import {CheWorkspace} from '../../../components/api/workspace/che-workspace.factory';

/**
 * @ngdoc controller
 * @name stacks.list.controller:ListStacksCtrl
 * @description This class is handling the controller for listing the stacks
 * @author Ann Shumilova
 */
export class ListStacksController {

  static $inject = ['cheWorkspace'];

  private cheWorkspace: CheWorkspace
   /**
   * The devfile content.
   */
  private devfileContent: string;

  private pluginRegistry: string;

  /**
   * Default constructor that is using resource
   */
  constructor(cheWorkspace: CheWorkspace) {
    this.cheWorkspace = cheWorkspace;

    this.pluginRegistry = cheWorkspace.getWorkspaceSettings() != null ? cheWorkspace.getWorkspaceSettings().cheWorkspacePluginRegistryUrl : null;
  }

  /**
   * Callback which is called when stack is selected.
   *
   * @param {string} stackId the stack ID
   */
  onDevfileSelected(devfile: che.IWorkspaceDevfile): void {
    this.devfileContent = jsyaml.dump(devfile, {'indent': 1});
  }

}
