import { User } from 'src/users/entities/user.entity';

export interface AccessTokenPayload extends User {
  sub: string;
}
