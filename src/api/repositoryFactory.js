import ProductsRepository from './productsRepository'
import CustomerRepository from './customerRepository'
import CartRepository from './cartReposity'
import BrandRepository from './brandsRepository'
import PageRepository from './pageRepository'
import CommentRepository from './commentRepository'

const repositories = {
    products: ProductsRepository,
    customer: CustomerRepository,
    cart: CartRepository,
    brand: BrandRepository,
    page: PageRepository,
    comment: CommentRepository,
};

const RepositoryFactory = {
    get: name => repositories[name]
};

export default RepositoryFactory;