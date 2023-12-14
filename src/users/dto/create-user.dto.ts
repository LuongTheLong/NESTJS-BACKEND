export class CreateUserDto {
    name: string;
    age: number;
    dob: string;
    keyCredential: string;
    role: "ADMIN" | "MEMBER" | "USER"
}