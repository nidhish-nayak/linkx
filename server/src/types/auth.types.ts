export type ExistingUser = [
    {
        id: number;
        username: string;
        email: string;
        password: string;
        name: string;
        coverPic?: null | string;
        profilePic?: null | string;
        city?: null | string;
        website?: null | string;
    },
];
