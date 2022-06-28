export const requiredMMess = (
    <div className="errorMessage"> Bu Zorunlu Bir Alandır* </div>
);
export const emailMess = (
    <div className="errorMessage">Lütfen Geçerli Bir Eposta Giriniz*</div>
);
export const minMess = (num) => (
    <div className="errorMessage">{`Şifre ${num} Karakterden Az Olamaz`}</div>
);
