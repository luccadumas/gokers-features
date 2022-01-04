'use strict';

/**
 * goker-public service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::goker-public.goker-public');
