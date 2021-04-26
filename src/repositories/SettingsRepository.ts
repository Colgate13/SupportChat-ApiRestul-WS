/* eslint-disable import/prefer-default-export */

import { Repository, EntityRepository } from 'typeorm';
import { Setting } from '../entities/Setting';

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository };
