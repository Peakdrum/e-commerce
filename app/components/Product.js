import React from 'react'
import AddItem from './AddItem'

const Product = (props) => 
	<div>
		<div>
			<h2>WheggNogg</h2>
		</div>
		<div>
			<h3>Super Protein</h3>
			<ul>
				<li>ส่วนประกอบของWheggNogg</li>
				<li>เวย์โปรตีน</li>
				<li>โปรตีนไข่</li>
				<li>โปรตีนถั่วเหลือง</li>
				<li>หัวบุก</li>
			</ul>
		</div>
		<div>
			<h3>ประโยชน์ของ Whegg nogg </h3>
			<ul>
				<li>ช่วยสร้างกล้ามเนื้อ</li>
				<li>ได้รับโปรตีนที่หลากหลาย</li>
				<li>อิ่มนาน</li>
				<li>ราคาดี</li>
				<li>ช่วยลดน้ำหนักได้ง่าย</li>
				<li>เพิ่มการเผาผลาญ</li>
			</ul>
			<AddItem onAdd={props.onAdd} onMinus={props.onMinus}>
				{props.quantity || 0} 
			</AddItem>
		</div>
	</div>

	export default Product