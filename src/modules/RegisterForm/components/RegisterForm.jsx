import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

import  {Button, Block}  from "../../../components";
import FormField from "../../../components/FormField/FormField";

const success = false;

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;
    return (
        <div>
            <div className="auth_top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form onSubmit={handleSubmit} className="login-form">
                        <FormField
                            name="email"
                            placeholder="E-Mail"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <FormField
                            name="fullname"
                            placeholder="Ваше имя и фамилия"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <FormField
                            name="password"
                            placeholder="Пароль"
                            type="password"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <FormField
                            name="password_2"
                            placeholder="Повторите пароль"
                            type="password"
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <Form.Item>
                            {isSubmitting && !isValid && <span>Ошибка!</span>}
                            <Button
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                type="primary"
                                size="large"
                            >
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className="auth_register-link" to="/">
                            Войти в аккаунт
                        </Link>
                    </Form>
                ) : (
                    <div className="auth_success-block">
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>
                            На Вашу почту отправлено письмо с ссылкой на подтверждение
                            аккаунта.
                        </p>
                    </div>
                )}
            </Block>
        </div>
    );
};

export default RegisterForm;