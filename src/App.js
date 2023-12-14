import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import './style.css';
import LanguageSelector from './components/LanguageSelector';
import PersonalInfoComponent from './components/PersonalInfoComponent';

const generateRandomData = (numCategories) => {
  const data = [];

  for (let i = 1; i <= numCategories; i++) {
    data.push({
      label: `Categoría ${i}`,
      value: Math.floor(Math.random() * 100) + 1, // Valores aleatorios entre 1 y 100
    });
  }

  return data;
};

function App() {
  const data = generateRandomData(5);
  const personalData = {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com'
  };
  return (
    <Container fixed>
     { /*<LanguageSelector />*/}
      {/*<PersonalInfoComponent data={personalData} />*/}
      
    </Container>
  );
}

export default App;
