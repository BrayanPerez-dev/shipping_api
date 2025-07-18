import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginAuthDto: LoginAuthDto): Promise<User> {
    const user = await this.usersService.findByEmail(loginAuthDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(
      loginAuthDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  async register(registerAuthDto: RegisterAuthDto): Promise<any> {
    const user = await this.usersService.findByEmail(registerAuthDto.email);
    if (user) {
      throw new UnauthorizedException('User already exists');
    }
    const newUser = await this.usersService.create(registerAuthDto);
    const payload = { email: newUser.email, sub: newUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(loginAuthDto: LoginAuthDto): Promise<any> {
    const user = await this.validateUser(loginAuthDto);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      userId: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      telephone: user.telephone,
    };
  }
}
