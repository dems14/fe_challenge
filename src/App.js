import Header from './componets/header';
import HeaderMobile from './componets/header_mobile';
import useWindowDimensions from './container/handle_resize';
import Footer from './componets/footer';
import Body from './componets/body/body';
function App() {
	const { width } = useWindowDimensions();
	return (
		<div className="App">
			{width > 1080 && <Header />}
			{width <= 1080 && <HeaderMobile />}
      <Body />
      <Footer />
		</div>
	);
}

export default App;
