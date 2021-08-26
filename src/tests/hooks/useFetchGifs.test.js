import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas con el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', async() => {

        //const {data, loading} = useFetchGifs( 'goku' ); //de esta forma no se testea un customHook sino a traves de la libreria testing-library/react-hooks
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('goku'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe retornar arreglo de imagenes y loading en false', async() => {

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('goku'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });

})