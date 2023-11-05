import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QLineEdit, QListWidget
from PyQt5.uic import loadUi
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Загрузка стоп-слов и инициализация стеммера
nltk.download('stopwords')
nltk.download('punkt')
stop_words = set(stopwords.words('russian'))
ps = PorterStemmer()

# Загрузите свой набор данных с ответами и сохраните их в переменной corpus
corpus = []

with open("fas.txt", "r", encoding="utf-8") as file:
    current_answer = ""
    for line in file:
        line = line.strip()
        if line:  # Если строка не пустая
            current_answer += " " + line  # Добавляем к текущему ответу с пробелом
        else:
            if current_answer:
                corpus.append(current_answer.strip())  # Добавляем текущий ответ в список
            current_answer = ""  # Сбрасываем текущий ответ

    if current_answer:
        corpus.append(current_answer.strip())  # Добавляем последний ответ в список

# Предварительная обработка текста
def preprocess_text(text):
    # Приведение к нижнему регистру и токенизация текста
    words = word_tokenize(text.lower())

    # Удаление стоп-слов и выполнение стемминга
    words = [ps.stem(word) for word in words if word not in stop_words]

    return ' '.join(words)

# Создание векторизатора TF-IDF
tfidf_vectorizer = TfidfVectorizer()
corpus = [preprocess_text(doc) for doc in corpus]
tfidf_matrix = tfidf_vectorizer.fit_transform(corpus)

# Функция для поиска наилучшего ответа на вопрос
def get_best_response(question):
    question = preprocess_text(question)
    question_vector = tfidf_vectorizer.transform([question])
    cosine_similarities = cosine_similarity(question_vector, tfidf_matrix)
    best_response_index = cosine_similarities.argmax()
    best_response = corpus[best_response_index]
    return best_response

# Создайте приложение
app = QApplication(sys.argv)

# Откройте файл .ui
ui_file = "app2.ui"
window = QMainWindow()
loadUi(ui_file, window)

# Найдите элементы интерфейса по их именам
button = window.findChild(QPushButton, "pushButton")
line_for_write = window.findChild(QLineEdit, "lineEdit")
chat_field = window.findChild(QListWidget, "listWidget")

# Обработчик события для кнопки button
def on_button_click():
    user_input = line_for_write.text()  # Получить текст, введенный пользователем
    response = get_best_response(user_input)  # Получить ответ от ИИ
    chat_field.addItem(f"Пользователь: {user_input}")
    chat_field.addItem(f"ИИ: {response}")
    line_for_write.clear()  # Очистить поле ввода

button.clicked.connect(on_button_click)  # Подключите функцию к событию кнопки

# Отобразите окно
window.show()

# Запустите приложение
sys.exit(app.exec_())
