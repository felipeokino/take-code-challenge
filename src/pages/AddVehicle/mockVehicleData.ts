export const initialValues = {
  data: {
    plate: 'abc1212',
    renavam: '1231231232',
    brand_name: { label: 'Nissan', value: 'nissan' },
    name:  { label: 'Sentra', value: 'sentra' },
    model_name: { label: 'S 2.0 16V FLEX 4P', value: 's2016v' },
    bodywork: { label: 'Sedan', value: 'sedan' },
    manufacturing_year: { label: '2014', value: '2014' },
    model_year: { label: '2015', value: '2015' },
    fuel_type: { label: 'Álcool/Gasolina', value: 'a/g' },
    gear_type: { label: 'Manual', value: 'MT' },
    mileage: 90000,
    color: { label: 'Prata', value: 'silver' },
  },
  accessories: {
    chips: []
  },
  characteristics: {
    chips: []
  },
  location: {
    state: '',
    city: ''
  },
  rate: {
    selectedClass: 'A',
    condition: 'Excelente',
    tags: [ { label: 'Conservado', value: 'conservado' } ]
  },
  price: {
    minValue: 56000,
    maxValue: 61000,
    kbbMin: 58000,
    kbbMax: 64000,
    particularValue: 52000
  },
  inspection: {
    notes: [ 1 ]
  },
  images: {
    files: []
  },
  contacts: {
    persons: [
      {
        name: 'Felipe Okino',
        phoneNumber: '16 99999-9999',
        email: 'email@domain.com'
      }
    ]
  }
};

export type VehicleType = typeof initialValues