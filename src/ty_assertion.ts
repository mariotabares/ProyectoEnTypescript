// Type assetion

let channel : any = "Mario";

// let channelStr=<string>channel;
let channelStr = channel as string

//const myCanvas=document.getElementById('canvas') as HTMLCanvasElement;
 const myCanvas=<HTMLCanvasElement>document.getElementById('canvas');
