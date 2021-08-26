import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe ('Pruebas en <GifGridItem/>', () => {

    const title = 'titulo';
    const url = 'https://localhost:3030/algo.jpg';
    const wrapper = shallow(<GifGridItem title = {title} url={url}/>);

    test('debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual a la url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props());

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.prop('className')).toBe('card animate__animated animate__fadeIn')
    })
})