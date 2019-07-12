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

import {ListStacksController} from './list-stacks/list-stacks.controller';

/**
 * @ngdoc controller
 * @name stacks:StacksConfig
 * @description This class is used for configuring all stacks stuff.
 * @author Ann Shumilova
 */
export class StacksConfig {

  constructor(register: che.IRegisterService) {
    register.controller('ListStacksController', ListStacksController);

    // config routes
    register.app.config(['$routeProvider', ($routeProvider: any) => {
      $routeProvider.accessWhen('/stacks', {
        title: 'Stacks',
        templateUrl: 'app/stacks/list-stacks/list-stacks.html',
        controller: 'ListStacksController',
        controllerAs: 'listStacksController'
      })
    }]);
  }
}
