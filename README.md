<h1 align="center">Documentação SHOPCAR - BACKEND 🏆</h1>

<h3 align="center">Plataforma de anúncio de compra e venda de carros</h3>

<br/>

## 📝 Sumário

1. Links da aplicação
2. Tecnologias utilizadas
3. Desenvolvedores responsáveis

<br>

## ✅ Links da aplicação

- URL de local develop: http://127.0.0.1:3000/
- URL de produção: https://shopcar-api.onrender.com/
- URL da documentação principal: https://shopcar-api.onrender.com/
- URL da documentação secundária: https://shopcar-api.onrender.com/docs/

<br>

## 🦾 **Tecnologias utilizadas**

- **NodeJS**
- **TypeScript**
- **Express**
- **TypeORM**
- **Zod**
- **PG**
- **JsonWebtoken**
- **BcryptJS**
- **Nodemailer**
- **Mailgen**
- **Swagger UI**

#

## Rodando a aplicação localmente 🧑‍💻

<br/>
Para inciar este projeto, clone o repositório e instale as dependências. Portanto utilize o comando abaixo para instalar tais dependências:

```
https://github.com/ShopCar/shopcar-api

```

```
yarn install
```

<br/>

Com isso feito, você precisa de um banco de dados PostgreSQL, configure-o conforme o arquivo .env.example, adicione também as demais variavéis que é preciso para o funcionamento de **recuperação de senha**, recomendo o uso de serviços como o [mailtrap](https://mailtrap.io/). Agora, execute a migração para criação das tabelas do banco de dados usando o comando:

```
yarn typeorm migration:run -d src/data-source
```

<br/>
Depois disso, é só rodar sua aplicação com o comando:

```
yarn dev
```

<br/>

Essa aplicação faz parte de um projeto fullstack, se deseja visite o nosso frontend para saber mais. Link do frontend:

```
https://github.com/ShopCar/shopcar

```

<br/>
<h1 align="">👥 Desenvolvedores responsáveis</h1>

<table align="center">
  <tr>
        <td align="center">
        <img src="https://media.licdn.com/dms/image/D4D03AQH0wdFjhH5bhA/profile-displayphoto-shrink_200_200/0/1682513447021?e=1689206400&v=beta&t=xnkgm1t_LtJcWucQhL0uYnI5DP1Imw3LQ2VRnAzwoP8" width="100px;" alt="Foto do Fred"/><br>          
        <sub>
          <b>Frederico Almeida</b>  <br/>
          <b>Dev</b> <br/>
           <div align="center" style="margin: 6px 0;">
            <a href="https://github.com/almeidafrederico" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank" />
           </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/almeidaafrederico/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td> 
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/57442717?v=4" width="100px;" alt="Foto do Filipe"/><br>        
        <sub>
          <b>Filipe de Lucena Paiva</b> <br/>
          <b>Scrum Master</b> <br/>
          <div align="center" style="margin: 6px 0;">
            <a href="https://github.com/filipelucena1" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
          </div>
           <div align="center">
            <a href="https://www.linkedin.com/in/filipe-de-lucena-paiva/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
           </div>
        </sub>
    </td>
    <td align="center">
        <img src="https://media.licdn.com/dms/image/D4D03AQHzBMm4ZHh0aA/profile-displayphoto-shrink_200_200/0/1679284092213?e=1689206400&v=beta&t=x_z7mEQrKf9jQTkIvUWHiIOeO6MZobGQmNm4LSuXTr4" width="100px;" alt="Foto do Viviane"/><br>        
        <sub>
          <b>Viviane Ribeiro</b> <br/>
          <b>Dev</b> <br/>
           <div align="center" style="margin: 6px 0;">
            <a href="https://github.com/vivyribeiro" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
           </div>
            <div align="center">
              <a href="https://www.linkedin.com/in/vivyribeiro/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
             </div>
        </sub>
    </td>
     <td align="center">
        <img src="https://avatars.githubusercontent.com/u/103138023?v=4" width="100px;" alt="Foto do Gustavo"/><br>        
        <sub>
            <b>Gabriel Carriel</b> <br/>
            <b>Dev</b> <br/>
             <div align="center" style="margin: 6px 0;">
            <a href="https://github.com/gaacarriel" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/gus-ferreira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/106534141?v=4" width="100px;" alt="Foto do Enrico"/><br>          
        <sub>
        <b>Eduardo Perondi</b>  <br/>
            <b>Dev</b> <br/>
            <div align="center" style="margin: 6px 0;">
            <a href="https://github.com/EduardoPerondidev" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/eduardo-perondi-de-almeida/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td>
  </tr>
</table>
