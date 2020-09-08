export interface ICurrentsData {
  [propName: string]: {
    Name: string,
    Value: number,
    CharCode: string,
    [propName: string]: any
  }
}

export interface ISelectOption {
  value: number,
  label: string
}