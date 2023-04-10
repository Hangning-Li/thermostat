import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  scopes: [
    'https://www.googleapis.com/auth/sdm.service'
  ]
});

export default async function getTemperature() {
  try {
    // Authorize with Google
    const authClient = await auth.getClient();
    const projectId = await auth.getProjectId();

    // Create a SmartDeviceManagementClient
    // const client = new SmartDeviceManagementClient({
    //   auth: authClient,
    //   projectId: projectId
    // });

    // // Get a list of devices
    // const [devices] = await client.listDevices({});

    // // Find the Nest Thermostat device
    // const thermostat = devices.find((device) => device.type === 'sdm.devices.types.THERMOSTAT');

    // // Get the current temperature
    // const temperature = thermostat.traits['sdm.devices.traits.TemperatureControl'].ambientTemperatureCelsius;
    // console.log(`The current temperature is ${temperature} degrees Celsius.`);
  } catch (error) {
    console.error(`Error retrieving temperature: ${error}`);
  }
}
