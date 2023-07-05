import { useState, useEffect, React } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Navigate } from "react-router-dom"
import { Input, Space } from 'antd';


function Home() {
    const { Search } = Input;
    const { Meta } = Card;
    const {Title}=Typography
    const [dataset, setDataset] = useState()
    const [mealList, setMealList] = useState()
    const [id, setId] = useState()
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState()

  
    useEffect(() => {
  
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(response => response.json())
            .then((data) => {
                setDataset(data?.meals)
                setMealList(data?.meals)
            })
            .catch(err => setError(err))
    }, [])



    const handleClick = (e) => {
        setId(e)
        setRedirect(true)
        
    }
    const onSearch = (value) => {
      


        let fileterd = mealList?.filter((el) =>

            el.strMeal.toLowerCase().includes(value.toLowerCase())


        )

        setDataset(fileterd)

    }
 

    if (redirect) {
        return (<Navigate
            to={{

                pathname: `/det/${id}`,

            }}
        />)
    }
    return (
        <>
            <Row gutter={16}>
                <Col span={24} justify="center" align="middle" style={{padding:"2%"}}>
                    <Title level={1}>Meals and Recipes</Title>
                </Col>
                <Col span={24} justify="center" align="middle" style={{padding:"3%"}}>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ maxWidth: 800 }} />

                </Col>
                <Col span={24}>
                    <Row gutter={[16, 16]} justify="space-around" about='middle' style={{

                        padding: "40px"
                    }}>
                        {
                            dataset?.map((el) => {
                                return (
                                    <Col span={5} key={el?.idMeal} onClick={() => handleClick(el?.idMeal)}>
                                        <Card

                                            hoverable
                                            style={{
                                                width: "100%",
                                                padding: "10px"
                                            }}
                                            cover={<img alt="foodImage" src={el?.strMealThumb} />}
                                        >
                                            <Meta title={el?.strMeal} description="" />
                                        </Card>
                                    </Col>
                                )

                            })

                        }
                    </Row>

                </Col>

            </Row>

        </>
    )
}

export default Home