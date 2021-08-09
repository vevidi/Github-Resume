import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {getLanguageTC} from '../../store/languages';

const Result = () => {
  const {username} = useParams();
  const dispatch = useDispatch();
  const {
    languages: {
      languages
    }
  } = useSelector(state => state);

  const [totalLanguages, setTotalLanguages] = useState(0);
  const [langArr, setLangArr] = useState([]);
  const [countArr, setCountArr] = useState([]);

  useEffect(() => {
    if (username) {
      dispatch(getLanguageTC(username))
    }
  }, [username]);

  useEffect(() => {
    let total = 0,
        languagesArr = [],
        numbersArr = [];
    if (languages) {
      for (const [key, value] of Object.entries(languages)) {
        total += value
        languagesArr.push(key);
        numbersArr.push(value);
      }
      setTotalLanguages(total);
      setLangArr(languagesArr);
      setCountArr(numbersArr);
    }
  }, [languages])

  return (
    <div className="container">
      {langArr && langArr.length ? langArr.map((item, index) => (
        <p key={index}><b>{item}: </b>{Math.round(countArr[index] / totalLanguages * 100)}%</p>
      )) : <p>No repos</p>}
    </div>
  )
}

export default Result;
