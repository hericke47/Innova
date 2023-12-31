import { CheckIn } from "@modules/gyms/infra/typeorm/entities/CheckIn";
import ICheckInRepository from "@modules/gyms/repositories/models/ICheckInRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  userId: string;
  take: number;
  skip: number;
}

@injectable()
class ListCheckInsByUserUseCase {
  constructor(
    @inject("CheckInRepository")
    private checkInRepository: ICheckInRepository
  ) {}

  async execute({ userId, skip, take }: IRequest): Promise<{
    checkIns: CheckIn[];
    count: number;
  }> {
    const checkIns = await this.checkInRepository.listByUserId(
      userId,
      take,
      skip
    );

    return checkIns;
  }
}

export { ListCheckInsByUserUseCase };
