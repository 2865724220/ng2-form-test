export function log() {
  return function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const origin = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log('args: ' + JSON.stringify(args));
      const result =  origin.apply(this, args);
      console.log('The result-' + result);
      return result;
    };

    return descriptor;
  }
}

export default function logger(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  const origin = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log('args: ' + JSON.stringify(args));
    const result =  origin.apply(this, args);
    console.log('The result-' + result);
    return result;
  };

  return descriptor;
}
