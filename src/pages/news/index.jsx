import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'src/components/button';
import { Input } from 'src/components/input';
import { Label } from 'src/components/label';
import { Modal } from 'src/components/modal';
import { Page } from 'src/components/page';
import { Textarea } from 'src/components/textarea';

import { UserRole } from 'src/lib/constants';
import { formatDate } from 'src/lib/helper';

import useModal from 'src/hooks/useModal';

import { selectUser } from 'src/redux/selectors/authSelectors';
import { selectFilteredForUser } from 'src/redux/selectors/newsSelectors';
import { newsSlice } from 'src/redux/slices/newsSlice';

import styles from './styles.module.scss';

const { add, approve, remove } = newsSlice.actions;

const NewsItem = ({ record, userRole }) => {
  const { creationDate, header, text, isApproved } = record;

  const dispatch = useDispatch();

  const onApproveButtonClick = () => dispatch(approve({ creationDate }));

  const onDeleteButtonClick = () => dispatch(remove({ creationDate }));

  return (
    <div className={styles['news__item']}>
      <p className={styles['news__date']}>{formatDate(creationDate)}</p>
      <h2 className={styles['news__header']}>{header}</h2>
      <p className={styles['news__text']}>{text}</p>
      {userRole === UserRole.Admin && (
        <div className={styles['news__button-container']}>
          {!isApproved && (
            <Button className={styles['news__button']} onClick={onApproveButtonClick}>
              Одобрить
            </Button>
          )}
          <Button className={styles['news__button']} onClick={onDeleteButtonClick}>
            Удалить
          </Button>
        </div>
      )}
    </div>
  );
};

const NewsPage = () => {
  const dispatch = useDispatch();

  const news = useSelector(state => selectFilteredForUser(state));

  const user = useSelector(state => selectUser(state));

  const [search, setSearch] = useState('');

  const [header, setHeader] = useState('');

  const [text, setText] = useState('');

  const [error, setError] = useState(null);

  const { open, toggle } = useModal();

  const userRole = user?.role;

  const formClassNames = classNames({
    [styles.form]: true,
    [styles['news__form']]: true,
  });

  const filteredNews = news.filter(r => {
    const lowerCaseSubstring = search.toLowerCase();

    const isHeaderMatches = r.header.toLowerCase().includes(lowerCaseSubstring);

    const isTextMatches = r.text.toLowerCase().includes(lowerCaseSubstring);

    return isHeaderMatches || isTextMatches;
  });

  const onAddButtonClick = () => toggle(true);

  const onFormSubmit = e => {
    e.preventDefault();

    if (!header || !text) {
      setError('Не введен заголовок или текст');

      return;
    }

    dispatch(add({ header, text }));

    toggle(false);

    setHeader('');
    setText('');
    setError(null);
  };

  return (
    <Page title="Новости">
      <div className={styles.news}>
        {userRole === UserRole.User && (
          <div className={styles['news__add-button-container']}>
            <Button onClick={onAddButtonClick}>Добавить новость</Button>
          </div>
        )}
        <div className={styles['news__search']}>
          <Input placeholder="Поиск" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className={styles['news__content']}>
          {filteredNews.map(r => (
            <NewsItem key={r.creationDate} record={r} userRole={userRole} />
          ))}
        </div>
      </div>
      <Modal isOpen={open} onClose={() => toggle(false)}>
        <div className={styles['modal-content']}>
          <form className={formClassNames} onSubmit={onFormSubmit} autoComplete="off">
            <p className={styles['form__field-container']}>
              <Label>Заголовок</Label>
              <Input
                placeholder="Введите заголовок новости"
                value={header}
                onChange={e => setHeader(e.target.value)}
              />
            </p>
            <p className={styles['form__field-container']}>
              <Label>Текст</Label>
              <Textarea
                placeholder="Введите текст новости"
                value={text}
                type="password"
                onChange={e => setText(e.target.value)}
              />
            </p>
            <p className={styles['form__error']}>{error}</p>
            <Button type="submit">Отправить</Button>
          </form>
        </div>
      </Modal>
    </Page>
  );
};

export { NewsPage };
