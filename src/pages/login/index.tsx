import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from './index.module.scss';
import strings from '@strings'
import { login } from '@request';
import { loginFromData } from '@types';

export default () => {
    const [form] = Form.useForm()
    const handleFinsh = async (values:loginFromData)=>{
            debugger
      const data = await login(values)
      
    }
    return <div className={styles.container}>
        <div className={styles.content}>
        <Form form={form} onFinish={handleFinsh} validateTrigger={['onChange']}>
            <Form.Item name={'userName'} required>
                <Input placeholder={strings.userName}></Input>
            </Form.Item>
            <Form.Item name={'password'} required>
                <Input placeholder={strings.password}></Input>
            </Form.Item>
            <Form.Item>
                <div>
                <Button htmlType={'submit'}>{strings.login}</Button>
                </div>
               
            </Form.Item>
        </Form>
        </div>
      
    </div>
}