import hashlib
import base64

from urllib import urlencode

from django.core.signing import Signer
from django.core.urlresolvers import reverse




<<<<<<< HEAD
def hash_for_script(js):
    hasher = hashlib.sha256()
    hasher.update(js.encode('utf-8'))
    encoded = base64.b64encode(hasher.digest())
    return "'sha256-{encoded}'".format(encoded=encoded)


def add_js_hash_to_request(request, js):
        if not hasattr(request, 'script_hashes'):
            request.script_hashes = []
        hash = hash_for_script(js)
        request.script_hashes.append(hash)


def append_query_args_to_url(base_url, args_dict):
    return "{0}?{1}".format(base_url, urlencode(args_dict))


def sign_url(url, secret=None):
    if secret:
        signer = Signer(secret, sep='||')
    else:
        signer = Signer(sep='||')

    url, signature = signer.sign(url).split('||')
    return (url, signature)


def signed_redirect(url):
    url, signature = sign_url(url)
    query_args = {'ext_url': url,
                  'signature': signature}

    return ('{0}?{1}'.format(reverse('external-site'), urlencode(query_args)))


def unsigned_redirect(url):
    query_args = {'ext_url': url}
    return ('{0}?{1}'.format(reverse('external-site'), urlencode(query_args)))


=======
>>>>>>> 662dd2d30714e2af32351d96a5058aa700d28e37
def extract_answers_from_request(request):
    answers = [(param.split('_')[1], value) for param, value in
               request.POST.items() if param.startswith('questionid')]
    return answers
