import {
  APIResponse,
  Cliente,
  Consulta,
  Clinica,
  Funcionario,
  Horario,
} from ".";

/* 


*/
export type GetLoged = () => Promise<APIResponse>;

export type Login = (
  username: string,
  password: string,
  remember?: boolean
) => Promise<APIResponse>;

export type Logout = () => Promise<APIResponse>;

/* 


*/
export type CreateConsulta = (consulta: Consulta) => Promise<APIResponse>;

export type UpdateConsulta = (
  id: number,
  marcada: string | null,
  realizada: boolean | null,
  descricao: string | null
) => Promise<APIResponse>;

export type GetConsulta = (
  params: {
    clinica_id?: number;
    cliente_id?: number;
    date_start?: Date | String;
    date_end?: Date | String;
  },
  id?: number
) => Promise<APIResponse>;

export type DeleteConsulta = (id: number) => Promise<APIResponse>;

/* 


*/
export type CreateCliente = (cliente: Cliente) => Promise<APIResponse>;

export type UpdateCliente = (
  id: number,
  cliente: Cliente
) => Promise<APIResponse>;

export type GetClientes = (params: {}, id?: number) => Promise<APIResponse>;

/* 


*/
export type CreateClinica = (clinica: Clinica) => Promise<APIResponse>;

export type UpdateClinica = (
  id: number,
  clinica: Clinica
) => Promise<APIResponse>;

export type GetClinicas = (
  id?: number | "",
  clinica?: Clinica
) => Promise<APIResponse>;

/* 


*/
export type CreateFuncionario = (
  funcionario: Funcionario
) => Promise<APIResponse>;

export type UpdateFuncionario = (
  funcionario: Funcionario
) => Promise<APIResponse>;

export type GetFuncionarios = (
  id?: number | "",
  funcionario?: Funcionario
) => Promise<APIResponse>;

/* 


*/
export type CreateHorario = (horario: Horario) => Promise<APIResponse>;

export type UpdateHorario = (
  id: number,
  horario: Horario
) => Promise<APIResponse>;

export type GetHorarios = (clinica_id: number) => Promise<APIResponse>;
