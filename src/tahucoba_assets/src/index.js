import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as tahucoba_idl, canisterId as tahucoba_id } from 'dfx-generated/tahucoba';

const agent = new HttpAgent();
const tahucoba = Actor.createActor(tahucoba_idl, { agent, canisterId: tahucoba_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await tahucoba.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
