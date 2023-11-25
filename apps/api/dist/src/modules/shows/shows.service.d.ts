import { Shows } from './shows.entity';
import { Repository } from 'typeorm';
export declare class ShowsService {
    private showsRepository;
    constructor(showsRepository: Repository<Shows>);
    getAll(): Promise<Shows[]>;
}
