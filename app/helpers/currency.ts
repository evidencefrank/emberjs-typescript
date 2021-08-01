import { helper } from '@ember/component/helper';

export function currency(params: any[]) {
  const [number] = params;
  const sign = '$';
  return `${sign} ${number}`;
}

export default helper(currency);
