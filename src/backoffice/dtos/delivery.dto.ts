import { EligibleTransactionVolumeDto } from './eligible-transaction-volume.dto';

export class DeliveryDto {
  constructor(
    public eligible_transaction_volume: EligibleTransactionVolumeDto,
    public price: number) { }
}
