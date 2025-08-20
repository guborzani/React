import './styles.css'
import Trash from '../../assets/Trash.png'


function Home() {

  const users - [
    id:'1',
    name: 'João',
    age: '25',
    email: 'joao@gmail.com
  ]

  return (
  
      <div className='container'>
        <form>
          <h1>Cadastro</h1>
          <input name='name' type='text' placeholder='Nome' />
          <input name='idade' type='text' placeholder='Idade' />
          <input name='email' type='email' placeholder='E-mail' />
          <button type='button'>Cadastrar</button>
        </form>
        <div>
          <div>
            <p>Nome: </p>
            <p>Idade: </p>
            <p>E-mail: </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      </div>
  )
}
export default Home
