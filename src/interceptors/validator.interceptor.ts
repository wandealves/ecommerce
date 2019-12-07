import { NestInterceptor, Injectable, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Result } from 'src/backoffice/models/result.model';
import { IContract } from 'src/backoffice/contracts/contract';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
  constructor(public contract: IContract) { }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const body = context.switchToHttp().getRequest().body;
    const valid = this.contract.validate(body);

    if (!valid) {
      throw new HttpException(new Result(
        'Ops, algo saiu errado',
        false,
        null,
        this.contract.errors),
        HttpStatus.BAD_REQUEST);
    }
    return next.handle().pipe(map(data => ({ data })));
  }
}
