export interface IFilter {
  name?: string;
  type: IWhitelist["type"];
}
export interface IWhitelist {
  _id: string;
  type: "ip" | "account";
  staffId?: string;
  desc?: string;
  ip?: string;
}
