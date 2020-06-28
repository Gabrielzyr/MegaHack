import React, { useEffect, useState } from 'react'
import {Form} from '@unform/web'
import Input from './input'
import {useHistory} from 'react-router-dom'
// import api from '../services/api'
import {Link} from 'react-router-dom'

export default function Login(){
  const history = useHistory()
  function handleSubmit(data){
  //   const email = data.email
  //   const senha = data.senha
  //   api.get('users').then(us=>{
  //     var emails = []
  //     var senhas = []

  //     for(let i of us.data){
  //       emails.push(i.email)
  //       senhas.push(i.password)
  //     }
  //   if (emails.indexOf(email)=== -1){
  //     alert('email não cadastrado')
  //   }else{
  //     if(senhas[emails.indexOf(email)]===senha){
  //       alert('entrou')
  //       for (let a of us.data){
  //         if(a.email===email){
  //           localStorage.setItem('user_id', JSON.stringify(a.id))
  //         }
  //       }
  //       //redirecionar para a pg inicial
  //       history.push('/index')

  //     }else{
  //       alert('Senha incorreta')
  //     }
  //   }
  //   })
  }

    return (
      <div>
        <Form onSubmit={handleSubmit}>
        <Input placeholder="email" type="email" name="email"/>
        <Input placeholder="senha" type="password" name="senha"/>
        <button type="submit" >Enviar</button>
        </Form>
        <Link to="Cadastro">Cadastre-se</Link>
      </div>
    )
  }

