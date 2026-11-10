import { ConfigurableModuleBuilder } from '@nestjs/common';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: OUTBOX_MODULE_OPTIONS,
} = new ConfigurableModuleBuilder().build();
