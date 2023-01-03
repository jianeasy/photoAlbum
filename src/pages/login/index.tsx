import React from 'react'
import { Form, Input } from 'antd'
import styles from './index.module.scss';
export default () => {
    return <div className={styles.container}>
        <Form>
            <Form.Item>
                <Input></Input>
            </Form.Item>
        </Form>
    </div>
}