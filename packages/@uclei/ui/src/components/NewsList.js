import React from 'react';
import MediaCard from './MediaCard.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    newsCard: {
        borderRadius: 30,
        overflowY: 'auto',
        margin: '2% auto',
        textAlign: 'center',
      },
    newsDiv:{
        margin: '0% auto'
    }
  }));

export default function NewsList() {
    const classes = useStyles();
    const [data, setData] = React.useState(
        {
            "status": "ok",
            "totalResults": 3683,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "CoinDesk"
                    },
                    "author": "Jaspreet Kalra",
                    "title": "Casa Rolls Out ‘Bank-to-Wallet’ Bitcoin-Buying Services for US Customers",
                    "description": "The cryptocurrency custody startup announced on Thursday that users will now be able to buy bitcoin (BTC) on the Casa app using their bank accounts.",
                    "url": "https://www.coindesk.com/casa-rolls-out-bank-to-wallet-bitcoin-buying-service-for-us-customers",
                    "image": "https://static.coindesk.com/wp-content/uploads/2020/05/shutterstock_728420089-1200x628.jpg",
                    "publishedAt": "2020-10-29T15:00:43Z",
                    "content": null
                }
              ]
            }
    );
    React.useEffect(() => {
        getNews().then(res => setData(res)).catch (err => console.log(err))
      },[]);
    const getNews = async () => {
        let date = new Date();
        let today = date.toISOString().slice(0,10);
        let query = "Stocks";
        let url = 'https://gnews.io/api/v4/search?' +
                    `q=${query}&` +
                    `from=${today}&` +
                    'country=us&' +
                    'token=9413f702be9d4fcf334d0ce66270875a';
        const response = await fetch(url);
        const body = await response.json();
        if(response.status !== 200) {
        throw Error(body.message)
        }
        console.log(body);
        return body;
    };

    return (
        <React.Fragment>
            {data.articles.slice(0, 3).map(articles => (
            <MediaCard className={classes.newsDiv} articleImg={articles.image} articleSource={articles.source.name} articleDesc={articles.title} articleLink={articles.url}/>
            ))}
        </React.Fragment>    
    )
}