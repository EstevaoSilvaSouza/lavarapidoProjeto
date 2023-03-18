export type CreateUser = {
  Name?: string | null;
  LastName?: string | null;
  Login?: string | null;
  Email?: string | null;
  Password?: string | null;
  Type?: string | null;
  IsActive?: true;
  IsHide?: false;
};
