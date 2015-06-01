import React from 'react';
import Translation from './translation';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {stubContext} from '../../helpers/stub-context';

describe('Translation Component', function() {
  describe('when the component is in the same locale', function() {
    it('renders the content', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-GB' },
        context: { currentLocale: 'en-GB', routeLocales: ['en-GB'], routeName: 'test' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
      expect(element.getDOMNode().textContent).toEqual('hello world');
    });
  });

  describe('when the component is in the same language', function() {
    it('renders the content', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en' },
        context: { currentLocale: 'en-GB', routeLocales: ['en-GB'], routeName: 'test' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
      expect(element.getDOMNode().textContent).toEqual('hello world');
    });
  });

  describe('when the component is in a different language', function() {
    it('returns an empty element', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'fr' },
        context: { currentLocale: 'en-GB', routeLocales: ['en-GB', 'fr-BE'], routeName: 'test' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
      expect(element.getDOMNode().textContent).toEqual('');
    });
  });

  describe('when the component is in a different locale', function() {
    it('returns an empty element', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-FR' },
        context: { currentLocale: 'en-GB', routeLocales: ['en-GB', 'en-FR'], routeName: 'test' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
      expect(element.getDOMNode().textContent).toEqual('');
    });
  });

  describe('when route locales is missing prop locales', function() {
    it('throws error rendering', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-GB' },
        context: { currentLocale: 'en-GB', routeLocales: ['fr-FR'], routeName: 'test' },
      });

      spyOn(console, 'warn');

      ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      expect(console.warn)
        .toHaveBeenCalledWith('Translation locales never rendered (en-GB), defined: (en-GB), possible: (fr-FR), route: test');
    });
  });

  describe('when exclude matches current locale', function() {
    it('returns an empty element', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en', exclude: ['en-IE'] },
        context: { currentLocale: 'en-IE', routeLocales: ['en-IE', 'en-GB'], routeName: 'test' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
      expect(element.getDOMNode().textContent).toEqual('');
    });
  });

  describe('when exclude does not match current locale', function() {
    it('renders the content', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en', exclude: ['en-GB'] },
        context: { currentLocale: 'en-IE', routeLocales: ['en-IE', 'en-GB'], routeName: 'test' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
      expect(element.getDOMNode().textContent).toEqual('hello world');
    });
  });
});
