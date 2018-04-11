export class IProfile{
    Id:number;
    Email?:string;
    Mobile?:string;
    FirstName?:string;
    LastName?:string;
    ProfileName?:string;
    ProfilePic?:string;
    Location?:string;
    Live?:boolean;
    IsActive?:boolean;
    Status?:number;
    AccountType?:number;

    User?:IUser;
}

export class IUser{
    Id:number;
    Email?:string;
    Mobile?:string;
    PasswordHash?:string;
}