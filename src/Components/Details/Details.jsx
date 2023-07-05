import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Card, Row, Col, Button, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';


function Details(props) {
  const [meal, setMeal] = useState()
  const [error, setError] = useState()
  const [redirect, setRedirect] = useState()
  const {Title}= Typography

  const { id } = useParams()
  const { Meta } = Card;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then((data) => {
        setMeal(data.meals[0])
      })
      .catch(err => setError(err))
  }, [])

  const dispatch = useDispatch();

  const addmeal = (meal) => {
    dispatch({ type: 'ADD_MEAL', payload: meal });
  };


  const handleClick = () => {
    addmeal({
      id: id,

      name: meal?.strMeal,
      image: meal?.strMealThumb
    })

    setRedirect(true)

  }

  if (redirect) {
    return (<Navigate
      to={{

        pathname: `/checkout`,

      }}
    />)
  }
  return (
    <>
      <Row gutter={[16, 16]} justify="space-aroung"
        align='middle'>
            <Col span={24} justify="center" align="middle" >
                    <Title level={1}> Recipe Guide</Title>
                </Col>
        <Col span={8}>
          <Card
            title={meal?.strMeal}

            bordered={false}
            style={{
              width: "100%",

              padding: "10%"
            }}
            cover={<img alt="foodImage" src={meal?.strMealThumb} />}
          >

          </Card>
        </Col>
        <Col span={14}>
          <Card
            title="Ingredients"
            bordered={false}
            style={{
              width: "100%",
              padding: "10%"
            }}
          >
            <Row>
              <Col span={12}>

                {meal?.strIngredient1 ? <p>{meal?.strIngredient1} - {meal?.strMeasure1}</p> : <></>}
                {meal?.strIngredient2 && <p>{meal?.strIngredient2} - {meal?.strMeasure2}</p>}
                {meal?.strIngredient3 && <p>{meal?.strIngredient3} - {meal?.strMeasure3}</p>}
                {meal?.strIngredient4 && <p>{meal?.strIngredient4} - {meal?.strMeasure4}</p>}
                {meal?.strIngredient5 && <p>{meal?.strIngredient5} - {meal?.strMeasure5}</p>}
                {meal?.strIngredient6 && <p>{meal?.strIngredient6} - {meal?.strMeasure6}</p>}
                {meal?.strIngredient7 && <p>{meal?.strIngredient7} - {meal?.strMeasure7}</p>}
                {meal?.strIngredient8 && <p>{meal?.strIngredient8} - {meal?.strMeasure8}</p>}
                {meal?.strIngredient9 && <p>{meal?.strIngredient9} - {meal?.strMeasure9}</p>}
                {meal?.strIngredient10 && <p>{meal?.strIngredient10} - {meal?.strMeasure10strIngredient10}</p>}
              </Col>
              <Col span={12}>
                {meal?.strIngredient11 && <p>{meal?.strIngredient11} - {meal?.strMeasure11}</p>}
                {meal?.strIngredient12 && <p>{meal?.strIngredient12} - {meal?.strMeasure12}</p>}
                {meal?.strIngredient13 && <p>{meal?.strIngredient13} - {meal?.strMeasure13}</p>}
                {meal?.strIngredient14 && <p>{meal?.strIngredient14} - {meal?.strMeasure14}</p>}
                {meal?.strIngredient15 && <p>{meal?.strIngredient15} - {meal?.strMeasure15}</p>}
                {meal?.strIngredient16 && <p>{meal?.strIngredient16} - {meal?.strMeasure16}</p>}
                {meal?.strIngredient17 && <p>{meal?.strIngredient17} - {meal?.strMeasure17}</p>}
                {meal?.strIngredient18 && <p>{meal?.strIngredient18} - {meal?.strMeasure18}</p>}
                {meal?.strIngredient19 && <p>{meal?.strIngredient19} - {meal?.strMeasure19}</p>}
                {meal?.strIngredient20 && <p>{meal?.strIngredient20} - {meal?.strMeasure20}</p>}
              </Col>
            </Row>


          </Card>
        </Col>

      </Row>
      <Row gutter={16}
        justify="space-aroung"
        align='middle'
      >
        <Card
          style={{ width: "100%", padding: "3%" }}


        >
          <Meta
            style={{ padding: "3%" }}

            title="Instructions"
            description={meal?.strInstructions}
          />
          <Button type="primary" style={{ float: "right" }} onClick={handleClick}>Checkout</Button>
        </Card>

      </Row>

    </>
  )
}

export default Details