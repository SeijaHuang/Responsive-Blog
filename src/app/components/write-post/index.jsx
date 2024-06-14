import { useState } from 'react';
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

const schema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 2,
      maxLength: 32,
      errorMessage: {
        type: 'Title must be string',
        minLength: '2 words',
        maxLength: '32 words',
      },
    },

    content: {
      type: 'string',
      minLength: 2,
      maxLength: 140,
      errorMessage: {
        type: 'Title must be string',
        minLength: '2 words',
        maxLength: '140 words',
      },
    },
  },
};

const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const validate = ajv.compile(schema);

export default (props) => {
  const [errors, setErrors] = useState({});
  const [postDetail, setPostDetail] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    console.log('change');
    //1.获取用户输入
    const name = e.target.name;
    const value = e.target.value;

    //2.更新状态
    setPostDetail({ ...postDetail, [name]: value });
  };

  const handleSubmit = (event) => {
    //1.组织表单默认提交行为
    event.preventDefault();

    //2.获取表单数据
    // const form = event.target;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries()); //整理成POJO plain old javascript object
    // console.log(data);
    console.log(postDetail);

    //3.表单验证/数据校验（minlength, maxlength,类型text,number)
    //也会用到regExp,正则表达式
    //如果校验失败，提示用户，无法提交数据
    const isValid = validate(postDetail);
    setErrors({});

    if (!isValid) {
      const fieldErrors = {};
      validate?.errors.forEach((error) => {
        const field = error.instancePath.substring(1);
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      console.log(fieldErrors);
      return;
    }
    //4.提交数据
  };

  // const validateForm = () => {
  //   let isValid = true;

  //   const { title, content } = postDetail;

  //   if (title.length < 2 || title.length > 32) {
  //     isValid = false;
  //   }

  //   if (content.length < 2 || content.length > 140) {
  //     isValid = false;
  //   }

  //   return isValid;
  // };

  return (
    <div className="row">
      <div className="col-md-12">
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              name="title"
              type="text"
              value={postDetail.title}
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              placeholder="Please Add a Title, 2-32 words"
              onChange={handleChange}
            />
          </div>
          {errors.title && <span className="text-danger">{errors.title}</span>}
          <div className="mb-3">
            <label className="form-label">Content:</label>
            <textarea
              name="content"
              className={`form-control ${errors.content ? 'is-invalid' : ''}`}
              value={postDetail.content}
              rows="10"
              placeholder="Please Enter a Content, maximum 140 words"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
