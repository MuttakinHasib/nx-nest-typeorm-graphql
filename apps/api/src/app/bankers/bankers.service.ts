import { Injectable } from '@nestjs/common';
import { CreateBankerInput } from './dto/create-banker.input';
import { UpdateBankerInput } from './dto/update-banker.input';

@Injectable()
export class BankersService {
  create(createBankerInput: CreateBankerInput) {
    return 'This action adds a new banker';
  }

  findAll() {
    return `This action returns all bankers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} banker`;
  }

  update(id: number, updateBankerInput: UpdateBankerInput) {
    return `This action updates a #${id} banker`;
  }

  remove(id: number) {
    return `This action removes a #${id} banker`;
  }
}
