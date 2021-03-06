/*
 * Copyright (c) 2012-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
package org.eclipse.che.agent.exec.shared.dto;

import org.eclipse.che.dto.shared.DTO;

@DTO
public interface ProcessStartResponseDto extends DtoWithPid {
  ProcessStartResponseDto withPid(int pid);

  String getName();

  ProcessStartResponseDto withName(String name);

  String getCommandLine();

  ProcessStartResponseDto withCommandLine(String commandLine);

  String getType();

  ProcessStartResponseDto withType(String type);

  boolean getAlive();

  ProcessStartResponseDto withAlive(boolean alive);

  int getNativePid();

  ProcessStartResponseDto withNativePid(int nativePid);

  int getExitCode();

  ProcessStartResponseDto withExitCode(int exitCode);
}
