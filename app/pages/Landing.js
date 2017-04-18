import React from 'react'
import Card from '../components/Card'

const product = {
	name: "WheggNogg",
	shortDescriptions: "หุ่นดีได้ด้วยวิธีเดียวเท่านั้น คือการ กินดี ออกกำลังกายดีแต่ว่าเราจะมีวิธีอะไรในการ กินโปรตืนให้เพียงพอ? หลากหลายพอ? WheggNogg คือการผสมผสานระหว่างโปรตีนจากไข่, เวย์, และ กล้วย"
}
const Landing = (props) => <Card header={product.name} bodyText={product.shortDescriptions} buttonText="อ่านรายละเอียด"/>
export default Landing