import { v4 as uuidv4 } from 'uuid';
import { getStorage } from './getStorage';


export const getData = (state, testData) => {


    const new_data = []
    const { data } = state;

    const date = new Date();

    const [month, day, year, hour, minute, second] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()]

    const horaActual = (`${day}/${month}/${year} - ${hour}:${minute}:${second} h`);

    // console.log(horaActual)


    if (data.length) {
        data.map((item) => {
            if (item) {
                new_data.push({
                    key: uuidv4(),
                    direccion: item?.request?.responseURL,
                    status: item?.status,
                    state: (item?.status) === 200 ? '🟢' : '🔴',
                    fecha: (item?.status) === 200 ? horaActual : null,
                    statustext: (item?.status) === 200 ? 'OK' : item?.data
                });
            }

        })
    }

    if (testData.length) {
        testData.map((item) => {
            if (item) {
                new_data.push({
                    key: uuidv4(),
                    direccion: item?.config?.url,
                    status: -1,
                    state: '🔴',
                    statustext: item?.message,
                });
            }

        })
    }


    new_data.forEach((element, index) => (
        element['servicio'] = `Servicio ${index + 1}`
    ))


    // console.log(testData);

    getStorage(new_data);

    return new_data;
}