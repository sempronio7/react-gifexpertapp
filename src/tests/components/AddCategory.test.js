import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe ('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    
    test('debe mostrarse correctamente', ()=>{
        expect (wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', ()=>{
        const input = wrapper.find('input');
        const value = 'hola';
        input.simulate('change', {
            target: {
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('no debe postear la informacion onSubmit', ()=>{
        wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar el setCategories y limpiar la caja de texto', ()=>{
        const value = 'hola mundo';

        //1. simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});

        //2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        //3. debe ser llamado el setCategories
        expect(setCategories).toHaveBeenCalled();
        
        //4. el valor de input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
        

    })

})