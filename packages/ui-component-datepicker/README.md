# Getting Started

Due to compatibiliy problems with the nextjs framework. The styles required by the wrapped react-datepicker component
are not packaged.

Instead the either need to be included as an external node dependency, or include in an HTML import statement of the page hosting the
datepicker.

#### Node dependcy

import "react-datepicker/dist/react-datepicker.css";

#### Import statement from CDN

<link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/4.3.0/react-datepicker.min.css" />
