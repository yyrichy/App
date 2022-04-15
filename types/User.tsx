import { Client } from "studentvue"

export type User = {
  username: string
  password: string
  client: Client
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setClient: React.Dispatch<any>
}